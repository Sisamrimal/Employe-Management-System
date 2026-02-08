const bcrypt = require("bcryptjs");

(async () => {
  const password = "admin@123";
  const hash = await bcrypt.hash(password, 10);
  console.log(hash);
})();
