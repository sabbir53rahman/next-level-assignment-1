// Problem 1

const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return value ? false : true;
  } else {
    return `This ${value} is not a correct type`;
  }
};

// Problem 2

const getLength = (value: string | any[]): number => {
  return value.length;
};

// Problem 3

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}';`;
  }
}

// Problem 4

type Items = {
  title: string;
  rating: number;
};

const filterByRating = (value: Items[]): Items[] | string => {
  if (value.some((item) => item.rating > 5)) {
    return "Your rating is greater then 5";
  } else {
    return value.filter((item) => item.rating >= 4);
  }
};

// Problem 5

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (value: User[]): User[] => {
  return value.filter((user) => user.isActive === true);
};

// Problem 6

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (value: Book): void => {
  console.log(
    `Title: ${value.title}, Author: ${value.author}, Published: ${
      value.publishedYear
    }, Available: ${value.isAvailable ? "Yes" : "No"}`
  );
};

// Problem 7

const getUniqueValues = (arr1: number[], arr2: number[]): number[] => {
  let uniqueArray: number[] = [];
  let uniqueIndex = 0;

  function isExist(arr: number[], value: number): boolean {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!isExist(uniqueArray, arr1[i])) {
      uniqueArray[uniqueIndex] = arr1[i];
      uniqueIndex++;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!isExist(uniqueArray, arr2[i])) {
      uniqueArray[uniqueIndex] = arr2[i];
      uniqueIndex++;
    }
  }

  return uniqueArray;
};



// Problem 8

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (value: Product[]): number => {
  const totalPrice = value.reduce((sum, product) => {
    const price = product.price * product.quantity;

    const finalPrice = product.discount
      ? price - (price * product.discount) / 100
      : price;

    return sum + finalPrice;
  }, 0);

  return totalPrice;
};
