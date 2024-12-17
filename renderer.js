const information = document.getElementById('info')

information.innerText = `This app using chrome (v${versions.chrome()}), 
Node.js (v${versions.node()}), app Electron (v${versions.electron()})`

const func = async () => {
    const response = await window.versions.ping()
    console.log(response)
}

func()