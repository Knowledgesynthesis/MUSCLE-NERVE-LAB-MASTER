import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout'
import HomePage from '@/pages/HomePage'
import NormalMusclePage from '@/pages/NormalMusclePage'
import StainsPage from '@/pages/StainsPage'
import ArtifactsPage from '@/pages/ArtifactsPage'
import InflammatoryPage from '@/pages/InflammatoryPage'
import DystrophiesPage from '@/pages/DystrophiesPage'
import CongenitalPage from '@/pages/CongenitalPage'
import MetabolicPage from '@/pages/MetabolicPage'
import NeurogenicPage from '@/pages/NeurogenicPage'
import NervePage from '@/pages/NervePage'
import NMJPage from '@/pages/NMJPage'
import EMPage from '@/pages/EMPage'
import IHCPage from '@/pages/IHCPage'
import PitfallsPage from '@/pages/PitfallsPage'
import CasesPage from '@/pages/CasesPage'
import AssessmentPage from '@/pages/AssessmentPage'
import SettingsPage from '@/pages/SettingsPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/normal-muscle" element={<NormalMusclePage />} />
        <Route path="/stains" element={<StainsPage />} />
        <Route path="/artifacts" element={<ArtifactsPage />} />
        <Route path="/inflammatory" element={<InflammatoryPage />} />
        <Route path="/dystrophies" element={<DystrophiesPage />} />
        <Route path="/congenital-myopathies" element={<CongenitalPage />} />
        <Route path="/metabolic" element={<MetabolicPage />} />
        <Route path="/neurogenic" element={<NeurogenicPage />} />
        <Route path="/nerve" element={<NervePage />} />
        <Route path="/nmj" element={<NMJPage />} />
        <Route path="/em" element={<EMPage />} />
        <Route path="/ihc" element={<IHCPage />} />
        <Route path="/pitfalls" element={<PitfallsPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/assessment" element={<AssessmentPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Layout>
  )
}

export default App
