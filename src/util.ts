export default class AppUtil {

    isObjectEmpty = (obj: object): boolean => {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }
        return true;
    }
}