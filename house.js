AFRAME.registerComponent("house", {
    init:function() {
        this.placesContainer = this.el;
        this.createCards()
    },

    createCards: function() {

        const thumbNailsRef = [
            {
                id: "house1",
                title: "HOUSE NO.1",
                url: "./assets/thumb/house1.jpg"
            },
        ]

        let previousXposition = -66;
        for(var item of thumbNailsRef){
            const posX = previousXposition + 22;
            const posY = 10;
            const posZ = -20;
            const position = { x: posX, y: posY, z: posZ}
            previousXposition = posX;

            const borderEl = this.createBorder(position, item.id);
            this.placesContainer.appendChild(borderEl);

            const thumbNail = this.createThumbnails(item);
            borderEl.appendChild(thumbNail);
        }
    },

    createThumbnails: function(item) {
        const thumb = document.createElement("a-entity")
        thumb.setAttribute("visible", true)
        thumb.setAttribute("geometry", {
            primitive: "circle",
            radius: 9,
        })
        thumb.setAttribute("material", {src: item.url})

        return thumb
    },

    createBorder: function(position, id) {
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("id", id)
        entityEl.setAttribute("position", position)
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry", {
            primitive:"ring",
            radiusInner:9,
            radiusOuter:10,
        });
        entityEl.setAttribute("material", {
            color:"cyan",
            opacity:1,
        });
        return entityEl
    },


})