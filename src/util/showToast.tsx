import { useToast } from "native-base"

export default function(message: string) {
    const toast = useToast()
    toast.show({ description: message })
}