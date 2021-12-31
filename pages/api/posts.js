import fs from 'fs'

export default async function Handler(req, res) {
    switch (req.method) {
        case 'GET':
            try {
                const posts = JSON.parse(fs.readFileSync('./posts/posts.json', 'utf8'))
                console.log(posts)
                return res.status(200).json(posts)
            } catch (error) {
                console.log(error)
            }
    }
}