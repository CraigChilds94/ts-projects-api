import { Request, Response } from "express"

const list = (req: Request, res: Response): void => {
    res.json({
        "projects": [
            {
                id: 1,
                name: "Website Rebuild"
            },
            {
                id: 3,
                name: "Design Portfolio"
            }
        ]
    })
}

export default {
    list
}
