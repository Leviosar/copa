export default class LocalStorage {
  write(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  read(key) {
    const data = localStorage.getItem(key);

    if (data) {
      return JSON.parse(data);
    }

    return null
  }

  update(key, data) {
    const id = key.split('/')[1]
    const name = key.split('/')[0]
    
    const haystack = JSON.parse(localStorage.getItem(name))
    localStorage.setItem(key, JSON.stringify(haystack.map(i => i.id == id ? data : i)))
  }

  delete(key) {
    localStorage.removeItem(key)
  }
}