import FuseAnimate from '@fuse/core/FuseAnimate'
import FusePageCarded from '@fuse/core/FusePageCarded'
import Button from '@material-ui/core/Button'

import React, {useState, useRef, useEffect} from 'react'
import Formsy from 'formsy-react'
import {FileFormsy, TextFieldFormsy} from '@fuse/core/formsy'

import {useDispatch, useSelector} from 'react-redux'
import * as userActions from 'app/auth/store/actions'
import * as Actions from 'app/store/actions'
import {useParams} from 'react-router-dom'

import reducer from 'app/auth/store/reducers'
import withReducer from 'app/store/withReducer'
import {useHistory} from 'react-router'

const ProfilePage = () => {
  const dispatch = useDispatch()
  const userType = useSelector(({user}) => user.user.type)
  const {userId} = useParams()
  const history = useHistory()

  useEffect(() => {
    dispatch(Actions.getUser(userId))
  }, [dispatch, userId])

  useEffect(() => {
    if (Actions.SAVE_USER === userType) history.push('/users')
  }, [userType, history])

  const currentUser = useSelector(({user}) => user.user)

  const {
    photoURL,
    displayName,
    email,
    phoneNumber,
    state,
    city,
    country,
    postcode,
  } = currentUser.data || {}
  const [isFormValid, setIsFormValid] = useState(false)
  const formRef = useRef(null)

  const disableButton = () => {
    setIsFormValid(false)
  }

  const enableButton = () => {
    setIsFormValid(true)
  }

  const handleSubmit = (model) => {
    const cloneUser = {...currentUser}
    cloneUser.data = {...cloneUser.data, ...model}

    if (userId === 'new') {
      dispatch(Actions.saveUser(cloneUser))
    } else {
      dispatch(userActions.updateUserInfo(cloneUser))
    }
  }

  return (
    <FusePageCarded
      content={
        <FuseAnimate animation="transition.expandIn">
          <div className="p-16 sm:p-24">
            <h2 className="mb-32 text-center">
              {userId === 'new' ? 'Create new user' : 'Update profile'}
            </h2>
            <Formsy
              onValidSubmit={handleSubmit}
              onValid={enableButton}
              onInvalid={disableButton}
              ref={formRef}
              className="flex flex-col justify-center w-full">
              <FileFormsy
                name="photoURL"
                label="Files"
                value={photoURL || ''}
              />
              <TextFieldFormsy
                className="mb-16"
                type="text"
                name="displayName"
                label="Display name"
                validations={{
                  minLength: 4,
                }}
                validationErrors={{
                  minLength: 'Min character length is 4',
                }}
                variant="outlined"
                value={displayName || ''}
                required
              />
              <TextFieldFormsy
                className="mb-16"
                type="text"
                name="email"
                label="Email"
                validations={{
                  isEmail: true,
                  maxLength: 50,
                }}
                validationErrors={{
                  isEmail: 'You have to type valid email',
                  maxLength: 'You can not type in more than 50 characters',
                }}
                variant="outlined"
                value={email || ''}
                required
              />
              <TextFieldFormsy
                className="mb-16"
                type="numberic"
                name="phoneNumber"
                label="Phone number"
                validations={{
                  isNumeric: true,
                  maxLength: 10,
                }}
                validationErrors={{
                  isNumeric: 'You have to type valid phone number',
                  maxLength: 'You can not type in more than 10 numbers',
                }}
                variant="outlined"
                value={phoneNumber || ''}
                required
              />
              <TextFieldFormsy
                className="mb-16"
                type="text"
                name="state"
                label="State"
                validations={{
                  minLength: 4,
                }}
                validationErrors={{
                  minLength: 'Min character length is 4',
                }}
                variant="outlined"
                value={state || ''}
                required
              />
              <TextFieldFormsy
                className="mb-16"
                type="text"
                name="city"
                label="City"
                validations={{
                  minLength: 4,
                }}
                validationErrors={{
                  minLength: 'Min character length is 4',
                }}
                variant="outlined"
                value={city || ''}
                required
              />
              <TextFieldFormsy
                className="mb-16"
                type="text"
                name="country"
                label="Country"
                validations={{
                  minLength: 4,
                }}
                validationErrors={{
                  minLength: 'Min character length is 4',
                }}
                variant="outlined"
                value={country || ''}
                required
              />
              <TextFieldFormsy
                className="mb-16"
                type="numberic"
                name="postcode"
                label="Post code"
                validations={{
                  isNumeric: true,
                  maxLength: 5,
                }}
                validationErrors={{
                  isNumeric: 'You have to type valid phone number',
                  maxLength: 'You can not type in more than 5 numbers',
                }}
                variant="outlined"
                value={postcode || ''}
                required
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="mx-auto normal-case mt-16"
                aria-label="Update"
                disabled={!isFormValid}>
                {userId === 'new' ? 'Add' : 'Update'}
              </Button>
            </Formsy>
          </div>
        </FuseAnimate>
      }
    />
  )
}

export default withReducer('Profile', reducer)(ProfilePage)
