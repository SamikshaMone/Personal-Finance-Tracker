using Microsoft.AspNetCore.Http;
using System;
using System.IO;
using System.Threading.Tasks;

namespace FinanceTracker.API.Utilities
{
    public static class FileUploadHelper
    {
        private static readonly string[] AllowedExtensions = { ".jpg", ".jpeg", ".png", ".pdf" };
        private const long MaxFileSize = 5 * 1024 * 1024; // 5 MB

        public static async Task<string> UploadFileAsync(IFormFile file, string uploadFolder)
        {
            if (file == null || file.Length == 0)
                throw new ArgumentException("File is empty or null");

            var extension = Path.GetExtension(file.FileName).ToLower();
            if (Array.IndexOf(AllowedExtensions, extension) < 0)
                throw new InvalidOperationException("Unsupported file type");

            if (file.Length > MaxFileSize)
                throw new InvalidOperationException("File size exceeds limit");

            var fileName = Guid.NewGuid().ToString() + extension;
            var fullPath = Path.Combine(uploadFolder, fileName);

            Directory.CreateDirectory(uploadFolder); // Ensure folder exists

            using (var stream = new FileStream(fullPath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            return fileName;
        }
    }
}

