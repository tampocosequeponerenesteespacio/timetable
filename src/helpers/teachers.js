import TT from './timetable_data'

  const TTa = TT.split(';')

  const LPI = TTa.slice(0,56)
  const EVA = TTa.slice(56,56*2)
  const RAG = TTa.slice(56*2,56*3)
  const XMU = TTa.slice(56*3,56*4)
  const CCA = TTa.slice(56*4,56*5)
  const CKR = TTa.slice(56*5,56*6)
  const FGR = TTa.slice(56*6,56*7)
  const LGR = TTa.slice(56*7,56*8)
  const MAG = TTa.slice(56*8,56*9)
  const MTO = TTa.slice(56*9,56*10)
  const NRE = TTa.slice(56*10,56*11)
  const POR = TTa.slice(56*11,56*12) 

  const SCI = [LPI, EVA, RAG, XMU, CCA, CKR, FGR, LGR, MAG, MTO, NRE, POR]
  const PHY = [MAG, MTO, NRE, POR]
  const CHE = [LPI, EVA, RAG, XMU]
  const BIO = [CCA, CKR, FGR, LGR]

  const allTeachers = {SCI, PHY, CHE, BIO}

export default allTeachers