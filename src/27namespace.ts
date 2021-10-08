// Akan error karena class hewan sudah pernah dideklarasikan di namespace yang sama
// class Hewan {

// }

// Menggunakan namespace agar tidak error jika ada nama class yang sama
namespace NamespaceExample {
  class Hewan {
    name: string = "Bambang"
  }

  const hewan = new Hewan();
  console.log(hewan.name);
}

