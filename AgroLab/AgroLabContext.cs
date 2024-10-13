using System;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace AgroLab
{
    public class AgroLabContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=localhost;Database=AgroLab;Username=postgres;Password=postgres;");
        }
    }
    public class User
    {
        public int UserID { get; set; }
        public string Login { get; set; }
        public string Email { get; set; }
        public string HashedPassword { get; set; }
        public string Salt { get; set; }
        public string Role { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
    public class AgroLabContext
    {
        public static bool Authenticate(string username, string password)
        {
            using (var context = new AgroLabContext())
            {
                var user = context.Users.FirstOrDefault(u => u.Login == username);
                if (user != null)
                {
                    return VerifyPassword(password, user.HashedPassword, Convert.FromBase64String(user.Salt));
                }
            }
            return false;
        }
        private static bool VerifyPassword(string password, string storedHash, byte[] salt)
        {
            using (var hmac = new HMACSHA256(salt))
            {
                var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
                return CompareByteArrays(computedHash, Convert.FromBase64String(storedHash));
            }
        }
        private static bool CompareByteArrays(byte[] a, byte[] b)
        {
            if (a.Length != b.Length)
                return false;
            for (int i = 0; i < a.Length; i++)
            {
                if (a[i] != b[i])
                    return false;
            }
            return true;
        }
        public static void AddNewUser(string login, string email, string password, string role)
        {
            using (var context = new AgroLabContext())
            {
                // Хеширование пароля
                using (var hmac = new HMACSHA256())
                {
                    var hashedPassword = Convert.ToBase64String(hmac.ComputeHash(Encoding.UTF8.GetBytes(password)));
                    var salt = Convert.ToBase64String(hmac.Key);
                    var user = new User
                    {
                        Login = login,
                        Email = email,
                        HashedPassword = hashedPassword,
                        Salt = salt,
                        Role = role,
                        CreatedAt = DateTime.Now,
                        UpdatedAt = DateTime.Now
                    };
                    context.Users.Add(user);
                    context.SaveChanges();
                }
            }
        }
    }
}