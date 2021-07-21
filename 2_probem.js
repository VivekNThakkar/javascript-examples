const user = {
  name: "Vivek",
  address: {
    personal: {
      city: "Dombivli",
      state: "Maharashtra",
    },
    office: {
      city: "nagar",
      area: {
        landmark: "haha",
      },
      state: "Banglore",
    },
  },
};

let finalObj = {};
const magicFunction_vivek = (obj, name) => {
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = obj[key];
    if (typeof value === "object") {
      if (Array.isArray(value)) {
        // wont happen
      } else {
        magicFunction_vivek(value, name + "_" + key);
      }
    } else {
      finalObj[name + "_" + key] = value;
    }
  }
};

magicFunction_vivek(user, "user");
console.log(finalObj);
