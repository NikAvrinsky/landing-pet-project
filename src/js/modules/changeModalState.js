import checkNumInputs from './checkNumInputs'

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox')

    checkNumInputs('#width')
    checkNumInputs('#height')
    
    function bindActionToElems(prop, elem, event = 'input') {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN' :
                        state[prop] = i;
                        break;
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT' :
                        state[prop] = item.value;
                        break;
                }
                console.log(state)
            })
            
        })
    }
    bindActionToElems('form', windowForm, 'click')
    bindActionToElems('width',  windowWidth)
    bindActionToElems('height', windowHeight)
    bindActionToElems('type', windowType, 'change')
    bindActionToElems('profile', windowProfile, 'change')    
        
}


export default changeModalState