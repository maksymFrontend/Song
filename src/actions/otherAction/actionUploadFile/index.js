import { actionPromise } from "../../store"
import { uploadFile } from "../uploadFile"

export const actionUploadFile = (file, type, chapter) => actionPromise('uploadFile',uploadFile(file, type, chapter))
  