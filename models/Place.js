class Place {
    constructor(id, title, image, address, lat, lng ) {
        this.id = id.toString()
        this.title = title
        this.image = image
        this.lat = lat
        this.lng = lng
        this.address = address
    }
}

export default Place