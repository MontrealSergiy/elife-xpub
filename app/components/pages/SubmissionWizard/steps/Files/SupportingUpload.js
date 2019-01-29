import React from 'react'
import Dropzone from 'react-dropzone'
import { Box, Flex } from '@rebass/grid'
import { th } from '@pubsweet/ui-toolkit'
import styled, { css } from 'styled-components'

import {
  errorMessageMapping,
  MAX_SUPPORTING_FILES,
  MAX_FILE_SIZE,
} from './utils'
import Icon from '../../../../ui/atoms/Icon'

const UploadLink = styled.span`
  color: ${th('colorPrimary')};
  cursor: pointer;
`

const RemoveLink = styled.span`
  cursor: pointer;
  color: ${th('colorPrimary')};
`

const ValidationText = styled.div`
  color: ${th('colorSuccess')};
  margin-top: ${th('space.1')};
  font-size: ${th('fontSizeBaseSmall')};
`

const SectionHeading = styled.span`
  color: ${th('colorTextSecondary')};
  display: inline-block;
  margin-bottom: ${th('space.3')};
  font-size: ${th('fontSizeBaseSmall')};
`

const StyledDropzone = styled(({ setRef, ...rest }) => (
  <Dropzone ref={setRef} {...rest} />
))`
  border-style: none;
  width: auto;
  height: auto;
  margin-bottom: ${th('space.3')};
  ${props =>
    props.children.length &&
    css`
      border: ${th('borderWidth')} ${th('borderStyle')} ${th('colorBorder')};
    `};
`
const FileBlock = styled(({ fileError, ...rest }) => <Flex {...rest} />)`
  border-top: ${th('borderWidth')} ${th('borderStyle')} ${th('colorBorder')};
  ${props =>
    props.fileError
      ? css`
          color: ${th('colorError')};
        `
      : css`
          &:first-child {
            border-top: none;
          }
        `};
`
const FileHolder = styled(Flex)`
  align-items: center;
  flex-wrap: wrap;
`

const FileName = styled.span`
  margin-right: 12px;
`

const IconHolder = styled.div`
  display: flex;
  flex-shrink: 0;
`

const UploadSuccessIcon = styled(props => (
  <Icon
    iconName="CheckCircle"
    overrideName="@pubsweet-pending.FileUpload.UploadSuccess"
    {...props}
  />
))`
  height: ${th('space.3')};
  width: ${th('space.3')};
  margin-right: ${th('space.3')};
`

const UploadFailureIcon = styled(props => (
  <Icon
    iconName="XCircle"
    overrideName="@pubsweet-pending.FileUpload.UploadFailure"
    {...props}
  />
))`
  height: ${th('space.3')};
  width: ${th('space.3')};
  margin-right: ${th('space.3')};
`
const UploadControl = styled(Box).attrs({
  width: 1 / 2,
})`
  display: block;
  text-align: right;
  font-size: ${th('fontSizeBaseSmall')};
  &:first-child {
    text-align: left;
  }
`
const Spinner = styled.span`
  animation: full-rotation 1.1s infinite linear;
  border: 2px solid ${th('colorPrimary')};
  border-left: 2px solid ${th('colorBackground')};
  border-radius: 50%;
  display: inline-block;
  height: ${th('space.3')};
  overflow: hidden;
  text-indent: -9999em;
  transform: translateZ(0);
  width: ${th('space.3')};
  margin-right: ${th('space.3')};
  @keyframes full-rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const ErrorMessage = styled.span`
  font-size: 12px;
`

function* fileUploadGenerator(files, uploadFile, replaceFile) {
  for (let fileIndex = 0; fileIndex < files.length; fileIndex+=1) {
    console.log('111111111')
    console.log(files[fileIndex].file)
    yield {
      upload: uploadFile(files[fileIndex].file),
      replace: replaceFile(files[fileIndex].file.id),
      fileId: files[fileIndex].id,
      fileName: files[fileIndex].file.name,
    }
  }
}

class SupportingUpload extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      uploading: false,
      files: props.files.map((file, index) => ({
        file,
        id: index,
        success: true,
      })),
    }
  }

  synchronouslyUploadFiles = files => {
    const { uploadFile } = this.props
    const { replaceFile } = this.props
    console.log('--------------------')
    console.log('uploading a new file')
    // console.log(files)
    const iterator = fileUploadGenerator(files, uploadFile, replaceFile)
    const loop = result => {
      console.log('new iteration')
      console.log(result)
      console.log('done ', result.done)
      if (result.done) {
        this.setState({ uploading: false })
      } else {
        const index = this.state.files.findIndex(file =>  (file.file.filename || file.file.name) === result.value.fileName)
        console.log('index from upload:,', index)
        

        if (index > -1 ) {
          console.log( 'removing time')
          console.log(this.state.files[index].id)
          // console.log( 'not uploading the file')
          // this.updateFileState(index, {
          //   success: true,
          //   loading: false,
          // })
          result.value.replace
            .then(data => {
              // this.updateFileState(result.value.fileId, {
              //   success: true,
              //   loading: false,
              // })
                console.log('now we have to upload the file again!')
                console.log(result.value)
                // this.updateFileState(index, {
                //     success: true,
                //     loading: false,
                //   })
                result.value.upload
                  .then(data2 => {
                    console.log('uploading time...')
                    console.log(result.value.fileId)
                    this.updateFileState(result.value.fileId, {
                      success: true,
                      loading: false,
                    })
                  })
                //   .catch(() => {
                //     this.updateFileState(result.value.fileId, {
                //       error: true,
                //       loading: false,
                //     })
                //   })
                //   .finally(() => loop(iterator.next()))
              })
              .catch((error) => {
                console.log('--------------there was an error')
                console.log(error)
                this.updateFileState(result.value.fileId, {
                  error: true,
                  loading: false,
                })
              })
            .finally(() => loop(iterator.next()))
        } else {

        result.value.upload
          .then(data => {
            // let newIndex = result.value.fileId
            // if (index > -1) {
            //   console.log('update, not push')
            //   newIndex = index
            //   console.log(`newIndex ${newIndex}`)
            // }
            console.log('uploading time...')
            console.log(result.value.fileId)
            this.updateFileState(result.value.fileId, {
              success: true,
              loading: false,
            })
          })
          .catch(() => {
            this.updateFileState(result.value.fileId, {
              error: true,
              loading: false,
            })
          })
          .finally(() => loop(iterator.next()))
        }
      }
    }
    loop(iterator.next())
  }

  updateFileState = (fileId, newState) => {
    console.log('updating file state for index ', fileId)
    const newFilesState = [...this.state.files]
    const fileIndex = newFilesState.findIndex(file => file.id === fileId)
    if (fileIndex > -1) {
      newFilesState[fileIndex] = { ...newFilesState[fileIndex], ...newState }
      this.setState({ files: newFilesState })
    }
  }

  onFileDrop = (acceptedFiles, rejectedFiles) => {
    let storageSpace = MAX_SUPPORTING_FILES - this.state.files.length

    if (storageSpace > 0) {
      const filesToUpload = acceptedFiles
        .slice(0, storageSpace)
        .map((file, index) => ({
          id: index + this.state.files.length,
          file,
          loading: true,
        }))
      if (filesToUpload.length > 0) {
        this.setState({
          uploading: true,
        })
        console.log('filesToUpload')
        console.log(filesToUpload)
        
      }
      storageSpace -= filesToUpload.length
      let rejectedFilesToAdd = []
      if (storageSpace > 0) {
        rejectedFilesToAdd = rejectedFiles
          .slice(0, storageSpace)
          .map((file, index) => ({
            id: index + filesToUpload.length + this.state.files.length,
            file,
            loading: false,
            success: false,
            rejected: true,
          }))
      }
      

      let isUpdate = false
      filesToUpload.forEach(uploadFile => {
      // console.log('aaaaaaa')
      // console.log(uploadFile)
      const index = this.state.files.findIndex(file => (file.file.name || file.file.filename) === uploadFile.file.name)
      console.log('index, ', index)
      // // {
      // //   console.log('@@@@@')
      // //   console.log('@@@@@')
      // //   console.log(file.file)
      // //   return (file.file.name || file.file.filename) === uploadFile.file.name
      // // })
      // console.log(index)
      this.synchronouslyUploadFiles(filesToUpload)
      if (index > -1) {
        // this.state.files[index] = uploadFile
        const newFiles =  [...this.state.files]
        console.log('bbbbbbbb')
        console.log(newFiles)
        console.log(uploadFile)
        newFiles[index] = uploadFile
        console.log('ccccccc')
        console.log(newFiles)
        this.setState({
          files: [ ...newFiles ]
        })
        isUpdate = true
      // } else {
          // 
      }
    })
// console.log(isUpdate)

      if (!isUpdate) {
        this.setState({
          files: [...this.state.files, ...filesToUpload, ...rejectedFilesToAdd],
        })
      }

    }
  }

  render() {
    let dropzoneRef
    const { hasManuscript, removeFiles } = this.props
    const successfullyUploadedFiles = this.state.files.filter(
      file => !file.error,
    )
    return (
      <React.Fragment>
        {successfullyUploadedFiles.length > 0 && (
          <SectionHeading>Supporting files:</SectionHeading>
        )}
        <StyledDropzone
          data-test-id="supportingFilesUpload"
          maxSize={MAX_FILE_SIZE * 1e6}
          onDrop={this.onFileDrop}
          setRef={node => {
            dropzoneRef = node
          }}
        >
          {this.state.files.map(file => (
            <FileBlock
              fileError={file.error || file.rejected}
              key={file.id}
              p={3}
            >
              <IconHolder>
                {file.loading && <Spinner />}
                {file.success && <UploadSuccessIcon />}
                {(file.error || file.rejected) && <UploadFailureIcon />}
              </IconHolder>
              <FileHolder>
                <FileName data-test-id="file-block-name">
                  {file.file.name ? file.file.name : file.file.filename}
                </FileName>
                {file.rejected && (
                  <ErrorMessage data-test-id="file-block-error">
                    {errorMessageMapping.MAX_SIZE_EXCEEDED}
                  </ErrorMessage>
                )}
              </FileHolder>
            </FileBlock>
          ))}
        </StyledDropzone>
        {hasManuscript &&
          !this.state.uploading && (
            <React.Fragment>
              <Flex>
                {successfullyUploadedFiles.length < MAX_SUPPORTING_FILES && (
                  <React.Fragment>
                
                    <UploadControl>
                      Add more{' '}
                      <UploadLink
                        data-test-id="supportingFilesLink"
                        onClick={() => dropzoneRef.open()}
                      >
                        supporting files
                      </UploadLink>{' '}
                      (optional)
                    </UploadControl>
                  </React.Fragment>
                )}
                {successfullyUploadedFiles.length > 0 && (
                  <UploadControl>
                    <RemoveLink
                      data-test-id="supportingFilesRemove"
                      onClick={() =>
                        removeFiles().then(() => {
                          this.setState({ files: [] })
                        })
                      }
                    >
                      Remove all
                    </RemoveLink>
                  </UploadControl>
                )}
              </Flex>
            </React.Fragment>
          )}
        {hasManuscript &&
          successfullyUploadedFiles.length > 9 && (
            <ValidationText>
              Maximum {MAX_SUPPORTING_FILES} supporting files
            </ValidationText>
          )}
      </React.Fragment>
    )
  }
}

export default SupportingUpload
