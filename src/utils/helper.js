export default {
  storage: {
    exists(email) {
      let list = localStorage.getItem("users");
      list = JSON.parse(list);
      let res = list.filter((u) => u.email === email);
      return res.length > 0;
    },
    addUser(user) {
      let list = localStorage.getItem("users");
      if (list === null) {
        this.resetStorage();
      }
      if (!this.exists(user.email)) {
        list = JSON.parse(list);
        list.unshift(user);
        list = JSON.stringify(list);
        localStorage.setItem("users", list);
      }
    },
    listUsers() {
      let list = localStorage.getItem("users");
      list = list === null ? [] : JSON.parse(list);
      return list;
    },
    resetStorage() {
      localStorage.setItem("users", "[]");
    },
  },
  validations: {
    emailIsValid: (v) => {
      return /\S+@\S+\.\S+/.test(v);
    },
    passwordIsValid: (v) => {
      return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_^])[A-Za-z\d@$!%*#?&_^]{8,}$/.test(
        v
      );
    },
  },
};
