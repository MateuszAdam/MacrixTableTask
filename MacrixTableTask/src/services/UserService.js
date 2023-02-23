import axios from "axios";

export class UserService {

    
    baseUrl = "https://specialview.backendless.app/api/data/People";

    async create(user){
        const res = await axios.post(this.baseUrl, user);
        return res.data;
    }

    async readAll(){
        const res = await axios.get(this.baseUrl);
        return res.data;
    }

    async updateAll(users) {
        const res = await axios.put(this.baseUrl, users);
        return res.data;
      }

    async update(user){
        const res = await axios.put(this.baseUrl + "/"+ user.objectId, user);
        return res.data;
    }

    async delete(id){
        const res = await axios.delete(this.baseUrl + "/"+ id);
        return res.data;
    }
}
    