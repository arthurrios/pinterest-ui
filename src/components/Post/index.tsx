import { Image, Text, View } from 'react-native'
import { PostProps } from './post'
import { styles } from './styles'
import { Feather } from '@expo/vector-icons'
import { colors } from '@/theme/colors'
import { useEffect, useState } from 'react'

type Props = {
  post: PostProps
}

export function Post({ post }: Props) {
  const [aspectRatio, setAspectRatio] = useState(1)

  useEffect(() => {
    if (post.image) {
      Image.getSize(post.image, (width, height) => {
        setAspectRatio(width / height)
      })
    }
  }, [post.image])

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: post.image }}
        style={[styles.image, { aspectRatio }]}
        alt={`${post.title} image`}
      />
      <View style={styles.footer}>
        <Text style={styles.title}>{post.title}</Text>
        <Feather name="more-horizontal" size={16} color={colors.white} />
      </View>
    </View>
  )
}
