const input = document.querySelector('.input')
        const btn = document.querySelector('.btn')
        const ul = document.querySelector('.ul')

        const arr = JSON.parse(localStorage.getItem('arr')) || [] 
        secondLogic()

        function mainLogic() {
            const val = input.value.trim()

            if (!val) {
                alert('Enter something first')
                return
            }

            arr.push(val)

            input.value = ''
            input.focus()
            secondLogic()
            saved()
        }

        function secondLogic() {
            ul.innerHTML = ''
            for(let i = 0; i <= arr.length -1; i++) {

                const li = document.createElement('li')
                li.textContent = arr[i]

                const btnX = document.createElement('button')
                btnX.className = 'delete-btn'
                btnX.textContent = 'Delete'

                btnX.addEventListener('click', () => {
                    arr.splice(i, 1)
                    secondLogic()
                    saved()
                })

                li.appendChild(btnX)
                ul.appendChild(li)
            }
            console.log(arr)
        }

        function saved() {
            localStorage.setItem('arr', JSON.stringify(arr))
        }

        btn.addEventListener('click', () => {
            mainLogic()
        })

        input.addEventListener('keypress', e => {
      if (e.key === 'Enter') mainLogic()
    })
