(() => {
  interface Address {
    id: number;
    city: string;
    state: string;
  }

  interface Client {
    name: string;
    age?: number;
    address: Address;

    // getFullAddress(): string;
    getFullAddress?(id: string): string;
  }

  const client: Client = {
    name: "Fernando",
    age: 25,
    address: {
      id: 150,
      city: "Medellin",
      state: "Antioquia",
    },

    getFullAddress(id: string) {
      return `${this.address.id} ${this.address.city} ${this.address.state}`;
    },
  };

  const client2: Client = {
    name: "Fernando2",
    address: {
      id: 150,
      city: "Argentina",
      state: "Antioquia",
    },
  };
})();
