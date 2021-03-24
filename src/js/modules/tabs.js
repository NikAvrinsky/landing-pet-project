const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
   const header = document.querySelector(headerSelector)
   const tabs = document.querySelectorAll(tabSelector)
   const content = document.querySelectorAll(contentSelector)
   const active = activeClass
   

   const hideContent = () => {
       content.forEach(item => {
           item.style.display = 'none'
       })
       tabs.forEach(i => {
           i.classList.remove(active)
       })
   }
   const showContent = (i = 0) => {
       content[i].style.display = display
       tabs[i].classList.add(active)
   }

   header.addEventListener('click', (e) => {
    const target = e.target
    if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || 
    target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
        tabs.forEach((item, i) => {
            if (target == item || target.parentNode == item) {
                hideContent()
                showContent(i)
            }

        })
        }
   })


   hideContent()
   showContent()
}

export default tabs