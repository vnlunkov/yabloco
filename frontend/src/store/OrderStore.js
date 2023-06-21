import { makeAutoObservable } from 'mobx'

class CatalogStore {
    _page = 1 // текущая страница
    _count = 0 // сколько всего записей
    _limit = 3 // записей на страницу

    constructor() {
        makeAutoObservable(this)
    }

    
    get page() {
        return this._page
    }

    get count() {
        return this._count
    }

    get limit() {
        return this._limit
    }

    get pages() { // всего страниц
        return Math.ceil(this.count / this.limit)
    }
    
    set page(page) {
        this._page = page
    }

    set count(count) {
        this._count = count
    }

    set limit(limit) {
        this._limit = limit
    }
}

export default OrderStore