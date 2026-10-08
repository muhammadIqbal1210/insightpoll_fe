/**
 * Adaptor Upload File CKEditor 5
 * Menghubungkan proses drag-and-drop / browse gambar di CKEditor ke API Backend /posts/upload-cover
 */
export class InsightPollUploadAdapter {
  private loader: any;

  constructor(loader: any) {
    this.loader = loader;
  }

  upload(): Promise<{ default: string }> {
    return this.loader.file.then((file: File) => {
      return new Promise((resolve, reject) => {
        const token = localStorage.getItem("insightpoll_token");
        if (!token) {
          return reject("Sesi login berakhir. Silakan login kembali.");
        }

        const formData = new FormData();
        formData.append("file", file);

        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        fetch(`${apiUrl}/posts/upload-cover`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Gagal mengunggah gambar ke server.");
            }
            return res.json();
          })
          .then((data) => {
            // Format respons yang dibutuhkan CKEditor 5: { default: 'https://...' }
            const fullImageUrl = `${apiUrl}${data.fileUrl}`;
            resolve({
              default: fullImageUrl,
            });
          })
          .catch((err) => {
            reject(err.message || "Gagal mengunggah gambar");
          });
      });
    });
  }

  abort(): void {
    // Dipanggil jika user membatalkan upload
  }
}

export function InsightPollUploadPlugin(editor: any) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader: any) => {
    return new InsightPollUploadAdapter(loader);
  };
}
