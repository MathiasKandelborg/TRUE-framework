import SimpleBlockContent from '@components/CMS/PortableText/SimpleBlockContent'
import CustomAnimatePresence from '@components/HoC/Animation/CustomAnimatePresence'
import TitleWithDivider from '@components/HoC/TitleWithDivider'
import { PageAnimation } from '@components/UI'
import * as MUI from '@mui/material'
import { Product } from 'cms/Product'

interface ISingleProductPageProps {
  product: Product
}

const SingleProductPage: React.FC<ISingleProductPageProps> = (props) => {
  const { product } = props

  return (
    <CustomAnimatePresence layoutShift>
      <TitleWithDivider key="title" variant="h1" text={product?.title} />

      <PageAnimation key="page">
        <MUI.Grid container component={MUI.Paper} sx={{ p: 2 }}>
          <MUI.Typography component="div">
            <SimpleBlockContent blocks={product?.description} />
          </MUI.Typography>
        </MUI.Grid>
      </PageAnimation>
    </CustomAnimatePresence>
  )
}

export default SingleProductPage
