import { Story, Meta } from '@storybook/react'
import {
  NFTListItem,
  MibaoProvider,
  VStack
} from 'mibao-ui'
import { Stack } from '@chakra-ui/react'

export default {
  component: NFTListItem,
  title: 'Components/NFTListItem'
} as Meta

const imgSrc = 'https://goldenlegend.oss-cn-hangzhou.aliyuncs.com/production/a9017356-4ecf-4257-8345-6b14c1625ab7.gif'
const nftName = '收藏者个人主页收藏者个人主页收藏者个人主页收藏者个人主页收藏者个人主页'
const issuerName = '西九龙重案组高级督察西九龙重案组高级督察'

export const Regular: Story = () =>
  <MibaoProvider>
    <Stack spacing="30px" direction="column" w="300px" maxW="300px">
      <NFTListItem
        src={imgSrc}
        title={nftName}
        hasCardback
        type="audio"
        locale="zh"
        issuerProps={{ name: issuerName, src: imgSrc }}
        limitProps={{ limitedText: '限量', unlimitedText: '未限量', count: '12345', serialNumber: 5 }}
      />
    </Stack>
  </MibaoProvider>

export const WithLink: Story = () => {
  return (
    <MibaoProvider>
      <Stack spacing="30px" direction="column" w="300px" maxW="300px">
        <NFTListItem
          src={imgSrc}
          title={nftName}
          type="3d"
          imageProps={{ width: 80 }}
          locale="zh"
          href="https://mibao.net/issuer/47ea8b55-8dae-4cd5-9690-8995552a9201"
          issuerProps={{ name: issuerName, src: imgSrc }}
        />
      </Stack>
    </MibaoProvider>
  )
}

export const Banned: Story = () => {
  return (
    <MibaoProvider>
      <Stack spacing="30px" direction="column" w="300px" maxW="300px">
        <NFTListItem
          src={imgSrc}
          isIssuerBanned
          isNFTBanned={false}
          title={nftName}
          type="3d"
          locale="zh"
          bannedText="该秘宝暂不予显示"
          href="https://mibao.net/issuer/47ea8b55-8dae-4cd5-9690-8995552a9201"
          issuerProps={{ name: issuerName, src: imgSrc, bannedText: '该创作者暂不予显示' }}
        />
        <NFTListItem
          src={imgSrc}
          isIssuerBanned={false}
          isNFTBanned
          title={nftName}
          type="3d"
          locale="zh"
          bannedText="该秘宝暂不予显示"
          href="https://mibao.net/issuer/47ea8b55-8dae-4cd5-9690-8995552a9201"
          issuerProps={{ name: issuerName, src: imgSrc, bannedText: '该创作者暂不予显示', href: 'https://mibao.net/issuer/47ea8b55-8dae-4cd5-9690-8995552a9201' }}
        />
      </Stack>
    </MibaoProvider>
  )
}

export const Custom: Story = () => {
  const Card: React.FC = () => {
    return (
      <NFTListItem
        src={imgSrc}
        title={nftName}
        type="3d"
        locale="zh"
        backgroundColor="rgb(247, 250, 253)"
        padding="10px"
        borderRadius="20px"
        issuerProps={{ name: issuerName, src: imgSrc }}
        titleProps={{ fontSize: '14px', fontWeight: 'normal' }}
        limitProps={{ limitedText: '限量', unlimitedText: '未限量', count: '12345', serialNumber: 5 }}
      />
    )
  }
  return (
    <MibaoProvider>
      <VStack columns={3} w="300px" maxW="300px" spacing={10}>
        {Array(6).fill('').map((_, i) => {
          return <Card key={i} />
        })}
      </VStack>
    </MibaoProvider>
  )
}
