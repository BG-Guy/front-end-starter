// import { storageService } from './async-storage.service'
import { httpService } from "./http-service";
import { storageService } from "./storage-service";
// import { socketService, SOCKET_EVENT_USER_UPDATED } from './socket.service'

export const itemService = {
  getItems,
  getById,
  remove,
  update,
  getEmptyItem,
  save,
};

const ITEMS_KEY = "itemsDB";

async function getItems(filterBy) {
  // return storageService.query('gig')
  // await new Promise(resolve =>  setTimeout(resolve,1500));

  let items = await httpService.get();
  storageService.store(ITEMS_KEY, items);
  return items;
}

async function getById(itemId) {
  // const item = await storageService.get('item', itemId)
  // await new Promise(resolve =>  setTimeout(resolve,1500));
  const item = await httpService.get(`item/${itemId}`);
  return item;
}
function remove(itemId) {
  // return storageService.remove('gig', itemId)
  return httpService.delete(`item/${itemId}`);
}

async function update(item) {
  // await storageService.put('item', item)
  item = await httpService.put(`item/${item._id}`, item);
  // Handle case in which admin updates other item's details
  if (getLoggedinItem()._id === item._id) _saveLocalItem(item);
  return item;
}

function _saveLocalItem(item) {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(item));
  return item;
}
async function save(item) {
  const savedItem = item;
  if (savedItem._id) {
    return await httpService.put(`item/${savedItem._id}`, savedItem);
  } else {
    return await httpService.post("item", savedItem);
  }
}

// import { storageService } from "./storage-service";
// import { asyncStorageService } from "./async-storage-service";
// import {utilService} from './util-service'

// export const gigService = {
//   query,
//   getById,
//     remove,
//     save,
//   getEmptyItem,
// };

// const KEY = "gigsDB";

// var gItems = _createItems();

// function query() {
//   return JSON.parse(JSON.stringify(gItems));
// }

// function getById(id) {
//   return asyncStorageService.getById(KEY, id);
// }

// function save(gig) {
//   const gigToSave = JSON.parse(JSON.stringify(gig))
//   const savedItem = (gigToSave._id) ? _update(gigToSave) : _add(gigToSave)

//   storageService.store(KEY, gItems)
//   return savedItem;
// }

// function remove(id) {
//   const idx = gTodos.findIndex(gig => gig._id === id)
//   gItems.splice(idx, 1)
//   storageService.store(KEY, gItems)
// }

// function _add(gig) {
//   gig._id = utilService.makeId()
//   gItems.unshift(gig)
//   return gig
// }

// function _update(gig) {
//   const idx = gItems.findIndex(currItem => currItem._id === gig._id)
//   gItems.splice(idx, 1, gig)
//   return gig
// }

function getEmptyItem() {
  return {
    title: "",
    category: [],
    productImgs: [],
    description: "",
    price: null,
    daysToMake: "",
    loc: "",
    memberSince: "Jul 2021",
    avgResponceTime: "1 hour",
    lastDelivery: "1 week",
    rate: 0,
    about: "",
    owner: {
      _id: "623f4e421513c14a270f61a4",
      fullname: "frederickkessie",
      imgUrl:
        "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4abf6f5b58e4d78cfb7c410cf8d7a9ac-1626111679444/4a04b77c-22ee-4ce8-b4be-747fd059e9ff.jpg",
      username: "guy123",
      level: "premium",
      reviewers: [],
    },
  };
}
