const traerImagenes = async (categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=U6oTd4tzZg2AxbxP0Y5KLuEQHiTXWxrT&q=${encodeURI(categoria)}&limit=20`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    const gift = data.map((e) => {
        return {
            id: e.id,
            titulo: e.title,
            url: e.images?.downsized_medium.url
        }
    });
    console.log(gift);
    return gift;
}
export default traerImagenes;