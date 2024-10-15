using System;
using System.ComponentModel.DataAnnotations;
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

        public static bool Authenticate(string username, string password)
        {
            using (var context = new AgroLabContext())
            {
                var user = context.Users.FirstOrDefault(u => u.login == username);
                if (user != null)
                {
                    return VerifyPassword(password, user.hashed_password, user.salt);
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

        public static void AddNewUser(string login, string password, Roles role)
        {
            using (var context = new AgroLabContext())
            {
                // Хеширование пароля
                using (var hmac = new HMACSHA256())
                {
                    var hashedPassword = Convert.ToBase64String(hmac.ComputeHash(Encoding.UTF8.GetBytes(password)));
                    var salt = hmac.Key;//Convert.ToBase64String();
                    var user = new User
                    {
                        login = login,
                        hashed_password = hashedPassword,
                        role = role,
                        salt = salt
                        
                    };
                    context.Users.Add(user);
                    context.SaveChanges();
                }
            }
        }

        public class User
        {
            [Key]
            public int user_id { get; set; }
            public string login { get; set; }
            public string hashed_password { get; set; }
            public byte[] salt { get; set; }
            public Roles role { get; set; }
        }
    }
}