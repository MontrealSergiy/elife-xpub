const ManuscriptModel = require('@elifesciences/xpub-model').Manuscript
const FileModel = require('@elifesciences/xpub-model').File
const logger = require('@pubsweet/logger')

class SupportingFiles {
  constructor(storage, id, user) {
    this.storage = storage
    this.id = id
    this.user = user
  }

  async removeAll() {
    let manuscript = await ManuscriptModel.find(this.id, this.user)
    const filesWithoutSupporting = manuscript.files.filter(
      file => file.type !== 'SUPPORTING_FILE',
    )

    const files = await FileModel.findByManuscriptId(this.id)

    if (files && files.length > 0) {
      let modified = false
      files
        .filter(file => file.type === 'SUPPORTING_FILE')
        .forEach(async file => {
          try {
            modified = true
            await file.updateStatus('CANCELLED')
            await this.storage.deleteContent(file)
            await file.delete()
          } catch (err) {
            logger.error(`Unable to delete file ${file.id}`, err)
          }
        })
      if (modified) {
        manuscript.files = filesWithoutSupporting
        manuscript = await manuscript.save()
      }
    }

    return manuscript
  }

  async replace(manuscriptId, fileId) {
    const manuscript = await ManuscriptModel.find(this.id, this.user)
    
    // const { stream, filename } = await newFile

    const file = await FileModel.findf(fileId)

    console.log(file)
    if (manuscript.id === manuscriptId) {
      await this.storage.deleteContent(file)
      await file.delete()
    } else {
      logger.error(`file ${fileId} does not belongs to manuscript ${manuscriptId}`)
    }

    return manuscript

    // const keepfiles = manuscript.files.filter(
    //   file => file.filename !== filename,
    // )

    // if (files && files.length > 0) {
      // let modified = false
      // const supportFile = files.filter(file => file.filename === filename)
        // {
        //   console.log(1)
        //   console.log(file.filename)
        //   console.log(2)
        //   console.log(filename)
        //   return file.filename === filename
        // })

        // if (supportFile.length > 0) {
        //   let file = supportFile[0]
        //   console.log('perform removing...')
        //   try {
        //     modified = true
        //     await file.updateStatus('CANCELLED')
        //     console.log('##########################')
        //     console.log(file)
        //     const fileId = file.id
        //     console.log(fileId)
        //     console.log('##########################')
        //     await this.storage.deleteContent(file)
        //     await file.delete()
          
            // const fileContents = await new Promise((resolve, reject) => {
            //   const chunks = []
            //   stream.on('data', chunk => {
            //     chunks.push(chunk)
            //   })
            //   stream.on('error', reject)
            //   stream.on('end', () => {
            //     resolve(Buffer.concat(chunks))
            //   })
            // })

            // console.log('**************')
            // console.log(fileContents.length)
            // console.log('**************')
            // console.log(fileId)

            // // not sure???
            // file = await FileModel.find(fileId)

            // console.log('============')
            // console.log(file)
            // console.log('============')

            // await file.updateSize(String(fileContents.length))

            // console.log(file)
            // file = await FileModel.find(fileId)
            // await file.updateStatus('UPLOADED')
            // console.log('a')
            // console.log(file)
            // await S3Storage.putContent(file, fileContents, {})
            // file = await FileModel.find(fileId)
            // await file.updateStatus('STORED')
            // console.log('b')
            // console.log(file)
            
          // } catch (err) {
          //   logger.error(`Unable to delete file ${file.id}`, err)
          // }
        // }
      // if (modified) {
      //   manuscript.files = keepfiles
      //   manuscript = await manuscript.save()
      // }
    // }
  }
}

module.exports = SupportingFiles
