import{Request,Response} from 'express'
import { User } from '../entity/User'
import { getManager } from 'typeorm'
const homedetail=async(req:Request,resp:Response)=>{
    const entityManager=getManager()
    let data=await entityManager.insert(User,{
        firstName:"Rahul",
        lastName:"kannoujia",
        age:26
    }
        )
        let update =await entityManager.update(User,2,{firstName:"Kartik sir"})
        const abc=await entityManager.delete(User,2)
    resp.json(
        {
            data:"ok",
            user:data,
            update:update,
            abc:abc
        }
    )
}
export{
    homedetail
}