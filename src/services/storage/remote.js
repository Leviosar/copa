import DatabaseService from "../database/firebase_database";

export default class RemoteStorage {

  constructor(user) {
    this.driver = new DatabaseService();
    this.user = user
  }

  write(key, data) {
    this.driver.write(key, data);
  }

  update(key, data, options) {
    const mapping = {}
    
    if (options.namespaced) {
      mapping[`users/${this.user.uid}/${key}`] = data
    } else {
      mapping[key] = data
    }
    
    this.driver.update(data)
  }

  get(key) {
    const data = this.driver.read(key);

    if (data) {
      return JSON.parse(data);
    }

    return null
  }

  delete(key) {
    this.driver.delete(key)
  }
}