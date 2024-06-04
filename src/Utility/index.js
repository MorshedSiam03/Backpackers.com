import toast from "react-hot-toast";

export const getSavedHotels = () => {
    let hotels = [];
    const storageHotels = localStorage.getItem('hotels');
    if(storageHotels){
        hotels = JSON.parse(storageHotels);
    }
    return hotels;
}
export const getWishlist = () =>{
    let wishlists = [];
    const storageHotels = localStorage.getItem('wishlists');
    if(storageHotels){
        wishlists = JSON.parse(storageHotels);
    }
    return wishlists;
}
export const saveHotels = hotel =>{
    let hotels = getSavedHotels();
    const isExisting = hotels.find(h => h.id === hotel.id);
    if(isExisting){
        return toast.error('Already have!')
    }
    hotels.push(hotel)
    localStorage.setItem('hotels', JSON.stringify(hotels))
    toast.success('This hotels is booked successfully')
}
export const saveWishlists = wishlist =>{
    let wishlists = getWishlist()
    const isExisting = wishlists.find(h => h.id === wishlist.id)
    if(isExisting){
        return toast.error('Already have!')
    }
    wishlists.push(wishlist)
    localStorage.setItem('wishlists', JSON.stringify(wishlists))
    toast.success('Added to your wishlist')
}