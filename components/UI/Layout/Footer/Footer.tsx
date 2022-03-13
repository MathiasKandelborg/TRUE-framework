import * as MUI from '@mui/material'
import FooterGridRow from './FooterGridRow'
import FooterLinkGridItem from './FooterLinkGridItem'

const Footer: React.FC = () => (
  <footer>
    <MUI.Grid
      item
      xs={12}
      container
      alignItems="flex-start"
      justifyContent="space-around"
      component={MUI.Paper}>
      <FooterGridRow placeholder="lol">
        <FooterLinkGridItem text="Documentation" href="/implement-me/please" />
        <FooterLinkGridItem text="About TRUE" href="/about" />
        <FooterLinkGridItem text="Showcase" href="/implement-me-too/please" />
        <FooterLinkGridItem
          text="Github"
          href="https://github.com/MathiasKandelborg/TRUE"
        />
      </FooterGridRow>
      <MUI.Grid
        item
        xs={12}
        container
        alignItems="center"
        justifyContent="center">
        <MUI.Typography align="center" variant="overline" gutterBottom>
          Made with TRUE Framework - Mathias Kandelborg © 2020
        </MUI.Typography>
      </MUI.Grid>
    </MUI.Grid>
  </footer>
)

export default Footer
