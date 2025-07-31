from pathlib import Path

# 1. Shu yerga o'zgartirmoqchi bo'lgan papka manzilini yozing
folder = Path(r"/Users/davronbek/Downloads")   # misol uchun

# 2. Rasm fayllari deb tan olinadigan kengaytmalar
extensions = {".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff", ".webp"}

# 3. Fayllarni saralab, tartiblab renam qilish
for idx, file in enumerate(sorted(folder.iterdir()), start=1):
    if file.is_file() and file.suffix.lower() in extensions:
        new_name = f"img{idx}{file.suffix.lower()}"
        file.rename(file.with_name(new_name))
        print(f"{file.name}  ➜  {new_name}")

print("Tayyor! 🎉")
