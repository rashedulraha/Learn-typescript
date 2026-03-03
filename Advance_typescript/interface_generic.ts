{
  //  interface generic type

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  // interface poor developer
  interface HpDeveloper {
    brand: string;
    model: string;
    display: string;
  }

  const poorDeveloper: Developer<HpDeveloper> = {
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

  interface AppleDeveloper {
    brand: string;
    model: string;
    display: string;
    sleepTrack: boolean;
    heartTrack: boolean;
  }
  //! rich developer type interface
  const RichDeveloper: Developer<AppleDeveloper> = {
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
