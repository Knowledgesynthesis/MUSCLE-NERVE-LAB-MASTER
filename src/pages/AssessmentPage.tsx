import { useState } from 'react'
import { ClipboardCheck, RefreshCw, CheckCircle2, XCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  category: string
}

const questions: Question[] = [
  {
    id: 1,
    question: 'A muscle biopsy shows perifascicular atrophy with MAC deposition on capillaries. What is the most likely diagnosis?',
    options: ['Polymyositis', 'Dermatomyositis', 'Inclusion body myositis', 'Immune-mediated necrotizing myopathy'],
    correctAnswer: 1,
    explanation: 'Perifascicular atrophy with MAC deposition on capillaries is pathognomonic for dermatomyositis. PM shows endomysial CD8+ infiltrates, IBM has rimmed vacuoles, and IMNM shows MAC on sarcolemma.',
    category: 'Inflammatory',
  },
  {
    id: 2,
    question: 'On NADH staining, target fibers are characterized by:',
    options: ['Two concentric zones', 'Three concentric zones', 'Four concentric zones', 'Uniform dark staining'],
    correctAnswer: 1,
    explanation: 'Target fibers have THREE zones: central pale zone, dark intermediate zone, and normal peripheral zone. This distinguishes them from cores which have only two zones (central pale, normal peripheral).',
    category: 'Neurogenic',
  },
  {
    id: 3,
    question: 'A complete absence of dystrophin on IHC with secondary reduction of sarcoglycans indicates:',
    options: ['Becker muscular dystrophy', 'Duchenne muscular dystrophy', 'Primary sarcoglycanopathy', 'Dysferlinopathy'],
    correctAnswer: 1,
    explanation: 'Complete absence of dystrophin indicates DMD. BMD shows reduced/patchy staining. Secondary sarcoglycan reduction is expected in dystrophinopathies. Primary sarcoglycanopathy shows absent sarcoglycan with preserved dystrophin.',
    category: 'Dystrophy',
  },
  {
    id: 4,
    question: 'Ragged red fibers on Gomori trichrome are most characteristic of:',
    options: ['Glycogen storage disease', 'Lipid storage myopathy', 'Mitochondrial myopathy', 'Inflammatory myopathy'],
    correctAnswer: 2,
    explanation: 'Ragged red fibers represent subsarcolemmal mitochondrial accumulation and are characteristic of mitochondrial myopathies. They appear red on Gomori trichrome due to the staining of accumulated mitochondria.',
    category: 'Metabolic',
  },
  {
    id: 5,
    question: 'Rimmed vacuoles with CD8+ T cell invasion and p62-positive inclusions suggest:',
    options: ['Dermatomyositis', 'Polymyositis', 'Inclusion body myositis', 'IMNM'],
    correctAnswer: 2,
    explanation: 'The combination of rimmed vacuoles, CD8+ invasion of non-necrotic fibers, and p62-positive protein aggregates is diagnostic of IBM. PM lacks vacuoles, DM lacks endomysial invasion.',
    category: 'Inflammatory',
  },
  {
    id: 6,
    question: 'Fiber type grouping on ATPase staining indicates:',
    options: ['Normal fiber distribution', 'Acute denervation', 'Reinnervation', 'Myopathy'],
    correctAnswer: 2,
    explanation: 'Fiber type grouping occurs when collateral axonal sprouting reinnervates denervated fibers, converting them to the same type as the new motor unit. This represents successful reinnervation.',
    category: 'Neurogenic',
  },
  {
    id: 7,
    question: 'Which stain is essential for detecting glycogen accumulation?',
    options: ['Oil Red O', 'PAS', 'Congo Red', 'Gomori trichrome'],
    correctAnswer: 1,
    explanation: 'PAS (Periodic Acid-Schiff) stains glycogen magenta/pink. Diastase digestion can confirm the material is glycogen. Oil Red O is for lipid, Congo red for amyloid.',
    category: 'Stains',
  },
  {
    id: 8,
    question: 'Central cores on NADH with RYR1 mutation are associated with:',
    options: ['No clinical significance', 'Malignant hyperthermia risk', 'Cardiomyopathy', 'Respiratory failure only'],
    correctAnswer: 1,
    explanation: 'RYR1 mutations causing central core disease are associated with malignant hyperthermia susceptibility. Anesthesia precautions are required for these patients.',
    category: 'Congenital',
  },
  {
    id: 9,
    question: 'Onion bulbs on nerve biopsy indicate:',
    options: ['Acute axonal loss', 'Wallerian degeneration', 'Chronic demyelination/remyelination', 'Normal finding'],
    correctAnswer: 2,
    explanation: 'Onion bulbs are concentric layers of Schwann cell processes around an axon, resulting from repeated episodes of demyelination and remyelination. They indicate chronic demyelinating neuropathy.',
    category: 'Nerve',
  },
  {
    id: 10,
    question: 'A biopsy shows prominent necrosis with minimal inflammation and MAC on sarcolemma (not capillaries). The diagnosis is:',
    options: ['Dermatomyositis', 'Polymyositis', 'IMNM', 'Viral myositis'],
    correctAnswer: 2,
    explanation: 'Immune-mediated necrotizing myopathy (IMNM) shows prominent necrosis with minimal lymphocytic inflammation. MAC deposition is on the sarcolemma (not capillaries as in DM). Associated with anti-SRP or anti-HMGCR antibodies.',
    category: 'Inflammatory',
  },
  {
    id: 11,
    question: 'Which is TRUE about freezing artifact?',
    options: ['It affects only necrotic fibers', 'It creates a honeycomb pattern in all fibers', 'It is indistinguishable from vacuolar myopathy', 'It occurs only with improper thawing'],
    correctAnswer: 1,
    explanation: 'Freezing artifact creates a uniform honeycomb pattern of small vacuoles throughout all fibers due to ice crystal formation. True vacuolar myopathy shows membrane-bound vacuoles in selected fibers.',
    category: 'Artifacts',
  },
  {
    id: 12,
    question: 'COX-negative/SDH-positive (blue) fibers on combined stain indicate:',
    options: ['Normal aging', 'Mitochondrial respiratory chain defect', 'Glycogen storage', 'Lipid accumulation'],
    correctAnswer: 1,
    explanation: 'COX-negative/SDH-positive fibers (appearing blue on combined stain) indicate defective cytochrome c oxidase (Complex IV) with preserved SDH (Complex II), suggesting mtDNA mutation or respiratory chain defect.',
    category: 'Metabolic',
  },
  {
    id: 13,
    question: 'Which finding distinguishes IBM from polymyositis?',
    options: ['MHC-I upregulation', 'CD8+ T cell invasion', 'Rimmed vacuoles', 'Necrosis'],
    correctAnswer: 2,
    explanation: 'Both IBM and PM show MHC-I upregulation and CD8+ invasion of non-necrotic fibers. Rimmed vacuoles (and protein aggregates) distinguish IBM from PM. IBM is treatment-resistant.',
    category: 'Inflammatory',
  },
  {
    id: 14,
    question: 'Nemaline rods are best seen on:',
    options: ['H&E stain', 'Gomori trichrome', 'PAS stain', 'Oil Red O'],
    correctAnswer: 1,
    explanation: 'Nemaline rods appear as red/purple rod-shaped inclusions on Gomori trichrome stain. They may be subtle on H&E. These are characteristic of nemaline myopathy.',
    category: 'Congenital',
  },
  {
    id: 15,
    question: 'Angular atrophic fibers with increased esterase activity indicate:',
    options: ['Myopathy', 'Active denervation', 'Chronic reinnervation', 'Normal variation'],
    correctAnswer: 1,
    explanation: 'Angular atrophic fibers with increased non-specific esterase activity indicate active/recent denervation. Round atrophic fibers suggest myopathy. Esterase staining highlights denervated fibers.',
    category: 'Neurogenic',
  },
]

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([])
  const [isComplete, setIsComplete] = useState(false)
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>(() =>
    [...questions].sort(() => Math.random() - 0.5).slice(0, 10)
  )

  const handleAnswerSelect = (value: string) => {
    if (!isAnswered) {
      setSelectedAnswer(parseInt(value))
    }
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return

    setIsAnswered(true)
    setAnsweredQuestions([...answeredQuestions, currentQuestion])

    if (selectedAnswer === shuffledQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
    } else {
      setIsComplete(true)
    }
  }

  const handleRestart = () => {
    setShuffledQuestions([...questions].sort(() => Math.random() - 0.5).slice(0, 10))
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setIsAnswered(false)
    setScore(0)
    setAnsweredQuestions([])
    setIsComplete(false)
  }

  const q = shuffledQuestions[currentQuestion]
  const progress = ((currentQuestion + (isAnswered ? 1 : 0)) / shuffledQuestions.length) * 100

  if (isComplete) {
    return (
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <ClipboardCheck className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Assessment Complete</h1>
            <p className="text-muted-foreground mt-1">Session-only results</p>
          </div>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-4xl">
              {score} / {shuffledQuestions.length}
            </CardTitle>
            <CardDescription className="text-lg">
              {score >= 8 ? 'Excellent!' : score >= 6 ? 'Good job!' : 'Keep studying!'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress value={(score / shuffledQuestions.length) * 100} className="h-4" />
            <p className="text-center text-muted-foreground">
              You answered {score} out of {shuffledQuestions.length} questions correctly this session.
            </p>
            <Button className="w-full" onClick={handleRestart}>
              <RefreshCw className="h-4 w-4 mr-2" /> Try Again
            </Button>
          </CardContent>
        </Card>

        <Card className="border-yellow-500/30 bg-yellow-500/5">
          <CardContent className="p-4">
            <p className="text-sm text-center text-muted-foreground">
              <strong>Note:</strong> Results are session-only and are not stored or tracked.
              This assessment is for self-evaluation purposes only.
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <ClipboardCheck className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Assessment</h1>
          <p className="text-muted-foreground mt-1">Test your knowledge (session-only)</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Question {currentQuestion + 1} of {shuffledQuestions.length}</span>
          <span>{score} correct</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <span className="px-2 py-1 rounded-full bg-muted">{q.category}</span>
          </div>
          <CardTitle className="text-lg leading-relaxed">{q.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <RadioGroup
            value={selectedAnswer?.toString()}
            onValueChange={handleAnswerSelect}
            className="space-y-3"
          >
            {q.options.map((option, index) => {
              const isCorrect = index === q.correctAnswer
              const isSelected = selectedAnswer === index

              return (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors ${
                    isAnswered
                      ? isCorrect
                        ? 'bg-green-500/10 border-green-500'
                        : isSelected
                        ? 'bg-red-500/10 border-red-500'
                        : 'opacity-50'
                      : isSelected
                      ? 'border-primary bg-primary/5'
                      : 'hover:bg-muted'
                  }`}
                >
                  <RadioGroupItem
                    value={index.toString()}
                    id={`option-${index}`}
                    disabled={isAnswered}
                  />
                  <Label
                    htmlFor={`option-${index}`}
                    className="flex-1 cursor-pointer text-sm"
                  >
                    {option}
                  </Label>
                  {isAnswered && isCorrect && (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  )}
                  {isAnswered && isSelected && !isCorrect && (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                </div>
              )
            })}
          </RadioGroup>

          {isAnswered && (
            <Card className="bg-muted/50">
              <CardContent className="p-4">
                <h4 className="font-semibold text-sm mb-2">Explanation</h4>
                <p className="text-sm text-muted-foreground">{q.explanation}</p>
              </CardContent>
            </Card>
          )}

          <div className="flex gap-3">
            {!isAnswered ? (
              <Button
                className="flex-1"
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
              >
                Submit Answer
              </Button>
            ) : (
              <Button className="flex-1" onClick={handleNext}>
                {currentQuestion < shuffledQuestions.length - 1 ? 'Next Question' : 'See Results'}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="border-yellow-500/30 bg-yellow-500/5">
        <CardContent className="p-4">
          <p className="text-sm text-center text-muted-foreground">
            <strong>Educational Only:</strong> This assessment is for self-evaluation.
            No data is stored or tracked.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
