const getRandomManga = async (mail,password) => {
    const auth = btoa(`${mail}:${password}`)
    const res = await fetch("https://komga-proxy.hayasaku.fr", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Basic ${auth}`
        }
    }).then(res => res.json());

    console.log(res);
}

getRandomManga("lucashottin359@gmail.com","AdeleCastillon")