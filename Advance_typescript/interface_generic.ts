{
  //  interface generic type

  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
  }

  const poorDeveloper: Developer<{
    brand: string;
    model: string;
    display: string;
  }> = {
    name: "Rashedul",
    computer: {
      brand: "dell",
      model: "202XUN52",
      releaseYear: 2025,
    },
    smartWatch: {
      brand: "Emilab",
      model: "524SDFR5",
      display: "OLED",
    },
  };
  const RichDeveloper: Developer<{
    brand: string;
    model: string;
    display: string;
    sleepTrack: boolean;
    heartTrack: boolean;
  }> = {
    name: "Abdullah",
    computer: {
      brand: "Apple",
      model: "something",
      releaseYear: 2025,
    },
    smartWatch: {
      brand: "something",
      model: "nothing",
      display: "OLED",
      sleepTrack: true,
      heartTrack: true,
    },
  };
}
