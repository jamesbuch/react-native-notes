import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { TextInput, Button, IconButton, Text } from 'react-native-paper'
import { useForm, Controller, UseFormReset } from 'react-hook-form'
import { noteStore } from '../stores/note'

const AddNoteScreen = ({ navigation }: any): JSX.Element => {

    const [isSubmitSuccessful, setSubmitSuccessful] = React.useState(false)

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            title: '',
            content: '',
            tag: ''
        },
    })

    React.useEffect(() => {
        reset({
          title: '', content: '', tag: ''
        })
      }, [isSubmitSuccessful])

    const onSubmit = (data: any) => {
        console.log(data)
        noteStore.addNote(data)
        setSubmitSuccessful(!isSubmitSuccessful)
    }

    React.useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
            headerRight: () => (
                <IconButton
                    icon="note"
                    iconColor="#fff"
                    size={26}
                    onPress={() => console.log(`Clicking Note Icon`)}
                />
            ),
        });
    }, [navigation])

    return (
        <KeyboardAvoidingView>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Title"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="title"
            />
            {errors.title && <Text>Please enter the note title.</Text>}

            <Controller
                control={control}
                rules={{
                    maxLength: 1000,
                    required: true
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Note..."
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        multiline={true}
                    />
                )}
                name="content"
            />
            {errors.content && <Text>Please enter the note content.</Text>}

            <Controller
                control={control}
                rules={{
                    required: false,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Tag"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="tag"
            />

            <Button onPress={handleSubmit(onSubmit)}>Add Note</Button>
        </KeyboardAvoidingView>
    )
}

export default AddNoteScreen
