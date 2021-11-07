import { Story, Meta } from '@storybook/react'
import {
  NFTCard,
  MibaoProvider,
  mibaoTheme
} from 'mibao-ui'
import { Stack, SimpleGrid, extendTheme } from '@chakra-ui/react'

export default {
  component: NFTCard,
  title: 'Components/NFTCard'
} as Meta

const imgSrc = 'https://goldenlegend.oss-cn-hangzhou.aliyuncs.com/production/a9017356-4ecf-4257-8345-6b14c1625ab7.gif'
const nftName = '收藏者个人主页'

const theme = extendTheme(mibaoTheme, {
  locales: {
    nft: {
      cardBackTooltips: '该 NFT 卡背设置有信息，仅持有人可见',
      limited: '限量',
      unlimited: '不限量'
    }
  }
})

export const AllKindOfCard: Story = (args) =>
  <MibaoProvider theme={theme}>
    <Stack spacing="30px" direction="column" w="360px" maxW="360px">
      <NFTCard
        src={imgSrc}
        title={nftName}
        type="3d"
        locale="zh"
        issuerProps={{ name: 'GoodMan', src: imgSrc }}
        likeProps={{ likeCount: 56, isLiked: true }}
      />
      <NFTCard
        src={imgSrc}
        title={nftName}
        hasCardback
        type="audio"
        locale="zh"
        issuerProps={{ name: 'GoodMan', src: imgSrc }}
        limitProps={{ count: '12345', serialNumber: 5 }}
      />
      <NFTCard
        src={imgSrc}
        title={nftName}
        hasCardback
        type="audio"
        locale="zh"
        issuerProps={{ name: 'GoodMan', src: imgSrc }}
        limitProps={{ count: '12345', serialNumber: 5 }}
        likeProps={{ likeCount: 56, isLiked: true }}
      />
      <NFTCard
        src={imgSrc}
        title={nftName}
        hasCardback
        type="audio"
        locale="zh"
        issuerProps={{ name: 'GoodMan', src: imgSrc }}
        price="$188.00"
      />
      <NFTCard
        src={imgSrc}
        title={nftName}
        hasCardback
        type="audio"
        locale="zh"
        issuerProps={{ name: 'GoodMan', src: imgSrc }}
        price="$188.00"
        likeProps={{ likeCount: 56, isLiked: true }}
      />
    </Stack>
  </MibaoProvider>

export const WithLink: Story = () => {
  return (
    <MibaoProvider>
      <Stack spacing="30px" direction="column" w="360px" maxW="360px">
        <NFTCard
          src={imgSrc}
          title={nftName}
          type="3d"
          locale="zh"
          href="https://mibao.net/issuer/47ea8b55-8dae-4cd5-9690-8995552a9201"
          issuerProps={{ name: 'GoodMan', src: imgSrc }}
          likeProps={{ likeCount: 56, isLiked: true }}
        />
      </Stack>
    </MibaoProvider>
  )
}

export const Banned: Story = () => {
  return (
    <MibaoProvider>
      <Stack spacing="30px" direction="column" w="360px" maxW="360px">
        <NFTCard
          src={imgSrc}
          isIssuerBanned
          isNFTBanned={false}
          title={nftName}
          type="3d"
          locale="zh"
          bannedText="该秘宝暂不予显示"
          href="https://mibao.net/issuer/47ea8b55-8dae-4cd5-9690-8995552a9201"
          issuerProps={{ name: 'GoodMan', src: imgSrc, bannedText: '该创作者暂不予显示' }}
          likeProps={{ likeCount: 56, isLiked: true }}
        />
        <NFTCard
          src={imgSrc}
          isIssuerBanned={false}
          isNFTBanned
          title={nftName}
          type="3d"
          locale="zh"
          bannedText="该秘宝暂不予显示"
          href="https://mibao.net/issuer/47ea8b55-8dae-4cd5-9690-8995552a9201"
          issuerProps={{ name: 'GoodMan', src: imgSrc, bannedText: '该创作者暂不予显示', href: 'https://mibao.net/issuer/47ea8b55-8dae-4cd5-9690-8995552a9201' }}
          likeProps={{ likeCount: 56, isLiked: true }}
        />
      </Stack>
    </MibaoProvider>
  )
}

export const Custom: Story = () => {
  const Card: React.FC = () => {
    return (
      <NFTCard
        src={imgSrc}
        title={nftName}
        type="3d"
        locale="zh"
        backgroundColor="rgb(247, 250, 253)"
        padding="10px"
        borderRadius="20px"
        href="https://mibao.net/issuer/47ea8b55-8dae-4cd5-9690-8995552a9201"
        issuerProps={{ name: 'GoodMan', src: imgSrc }}
        likeProps={{ likeCount: 56, isLiked: true }}
        imageProps={{ borderRadius: '20px' }}
        titleProps={{ fontSize: '14px', fontWeight: 'normal' }}
      />
    )
  }
  return (
    <MibaoProvider>
      <SimpleGrid columns={3} w="600px" maxW="600px" spacing={3}>
        {Array(6).fill('').map((_, i) => {
          return <Card key={i} />
        })}
      </SimpleGrid>
    </MibaoProvider>
  )
}
