fetch('menu.json')
.then((resp) => resp.json())
.then((data) => {
    const menu = [...data];

    console.log(menu);
    menu.forEach((section, sIndex)=> {
        section.forEach((comida, cIndex) => {
            let item = document.createElement("div");
                item.className = "col-lg-12";
        
                item.innerHTML = `<div class="tab-item">
                                        <img src="${comida.img}" alt="">
                                        <h4>${comida.nombre}</h4>
                                        <p>${comida.descripcion}</p>
                                        <div class="price">
                                            <h6>$${comida.precio}</h6>
                                        </div>
                                    </div>`;

            if (cIndex % 2 != 0) {
                document.getElementById(`tab${sIndex+1}-rightRow`).appendChild(item);
            } else {
                document.getElementById(`tab${sIndex+1}-leftRow`).appendChild(item);
            };
        });
    });
});
