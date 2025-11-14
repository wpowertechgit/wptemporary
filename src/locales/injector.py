import os
import json
import tkinter as tk
from tkinter import filedialog, messagebox


class TranslationInjectorApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Locale Injector")
        self.root.iconbitmap("favicon.ico")  # Set the window icon (ensure favicon.ico exists in the same directory)

        self.default_locale_dir = os.getcwd()
        tk.Label(root, text="Locales Root Directory:").grid(row=0, column=0, sticky="w", padx=10, pady=5)
        self.locale_dir_entry = tk.Entry(root, width=40)
        self.locale_dir_entry.insert(0, self.default_locale_dir)
        self.locale_dir_entry.grid(row=0, column=1, padx=10, pady=5)
        tk.Button(root, text="Browse", command=self.browse_locale_dir).grid(row=0, column=2, padx=10, pady=5)

        tk.Label(root, text="Field Name:").grid(row=1, column=0, sticky="w", padx=10, pady=5)
        self.field_entry = tk.Entry(root, width=40)
        self.field_entry.grid(row=1, column=1, columnspan=2, padx=10, pady=5)

        self.translations_frame = tk.Frame(root)
        self.translations_frame.grid(row=2, column=0, columnspan=3, padx=10, pady=5, sticky="w")
        tk.Label(self.translations_frame, text="Translations:").grid(row=0, column=0, sticky="w")

        self.translation_rows = []
        self.add_translation_row()

        tk.Button(root, text="+ Add Language", command=self.add_translation_row).grid(row=3, column=0, columnspan=3, pady=5)

        # Inject button
        tk.Button(root, text="Inject Translations", command=self.inject_translations).grid(row=4, column=0, columnspan=3, pady=10)

    def browse_locale_dir(self):
        directory = filedialog.askdirectory()
        if directory:
            self.locale_dir_entry.delete(0, tk.END)
            self.locale_dir_entry.insert(0, directory)

    def add_translation_row(self):
        """Add a new row for language and translation input."""
        row_frame = tk.Frame(self.translations_frame)
        row_frame.grid(sticky="w", pady=2)

        lang_label = tk.Label(row_frame, text="Language Code:")
        lang_label.grid(row=0, column=0, padx=5)

        lang_entry = tk.Entry(row_frame, width=10)
        lang_entry.grid(row=0, column=1, padx=5)

        trans_label = tk.Label(row_frame, text="Translation:")
        trans_label.grid(row=0, column=2, padx=5)

        trans_entry = tk.Entry(row_frame, width=30)
        trans_entry.grid(row=0, column=3, padx=5)

        self.translation_rows.append((lang_entry, trans_entry))

    def inject_translations(self):
        """Inject translations into multiple language files."""
        locale_dir = self.locale_dir_entry.get()
        field_name = self.field_entry.get().strip()

        if not locale_dir or not field_name:
            messagebox.showerror("Error", "Locales directory and field name are required.")
            return

        translations_to_inject = {}
        for lang_entry, trans_entry in self.translation_rows:
            language_code = lang_entry.get().strip()
            translation = trans_entry.get().strip()
            if language_code and translation:
                translations_to_inject[language_code] = translation

        if not translations_to_inject:
            messagebox.showerror("Error", "At least one language and translation must be provided.")
            return
        for language_code, translation in translations_to_inject.items():
            lang_dir = os.path.join(locale_dir, language_code)
            translation_file = os.path.join(lang_dir, "translation.json")
            if not os.path.isdir(lang_dir):
                messagebox.showerror("Error", f"Language folder '{language_code}' does not exist.")
                continue
            if not os.path.isfile(translation_file):
                messagebox.showerror("Error", f"'{translation_file}' does not exist.")
                continue
            try:
                with open(translation_file, "r", encoding="utf-8") as f:
                    translations = json.load(f)
            except Exception as e:
                messagebox.showerror("Error", f"Failed to load JSON for '{language_code}': {e}")
                continue
            translations[field_name] = translation
            try:
                with open(translation_file, "w", encoding="utf-8") as f:
                    f.write(json.dumps(translations, ensure_ascii=False, indent=2))
            except Exception as e:
                messagebox.showerror("Error", f"Failed to save JSON for '{language_code}': {e}")
                continue

        messagebox.showinfo("Success", "Translations injected successfully.")


if __name__ == "__main__":
    root = tk.Tk()
    app = TranslationInjectorApp(root)
    root.mainloop()
