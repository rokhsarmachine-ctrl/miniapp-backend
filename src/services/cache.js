class CacheService {
  constructor() {
    this.store = new Map();
  }

  async get(key) {
    return this.store.get(key) ?? null;
  }

  async set(key, value, ttlSeconds = 60) {
    this.store.set(key, value);
    if (ttlSeconds > 0) {
      setTimeout(() => this.store.delete(key), ttlSeconds * 1000);
    }
    return true;
  }

  async del(key) {
    this.store.delete(key);
    return true;
  }
}

module.exports = new CacheService();
