const movieUrl = 'http://localhost:8080/movie'
const seatUrl='http://localhost:8080/ticket'
class Service {
    getMovie() {
        return fetch(movieUrl).then(res => res.json())
    }
    getSeats(){
        return fetch(seatUrl).then(res=>res.json())
    }
}
const obj = new Service();
export default obj;

