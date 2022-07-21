export default function handler(req, res) {
    // res.status(200).send()

    if(req.method === "GET") {
        // res.status(200).json({
        //     id: 50,
        //     nome: "Willian",
        //     idade: 26
        // })
        handleGET(req, res)
    } else {
        res.status(405).send()
    }
}

function handleGET(req, res) {
    res.status(200).json({
        id: 50,
        nome: "Willian",
        idade: 26,
        email: "wsresilienttasteshpe@gmail.com"
    })
}