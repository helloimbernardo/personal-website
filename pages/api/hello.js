// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
        name: 'Bernardo Oliveira',
        more: [
            'What are you doing here?',
            'This should be a secret page',
            'https://youtu.be/d7xMgJedN2s'
        ],
        never: 'gonna give you up',
    })
}
