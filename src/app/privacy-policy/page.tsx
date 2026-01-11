import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const PrivacyPolicy = () => (
  <Box
    component="main"
    sx={{
      minHeight: '100vh',
      backgroundColor: '#F0F7FF',
      py: { xs: 4, sm: 6 },
      px: { xs: 1, sm: 3, lg: 4 },
    }}
  >
    <Container maxWidth="md">
      <Card
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          border: 'none',
          boxShadow: 3,
        }}
      >
        <CardContent
          sx={{
            p: 4,
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: '1.875rem',
              fontWeight: 700,
              color: '#1A1F36',
              mb: 4,
            }}
          >
            Privacy Policy
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              color: '#4A4A4A',
            }}
          >
            <Box component="section">
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.75,
                }}
              >
                Your privacy is important to us. This Privacy Policy explains how ChooseSmart
                (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses, and protects
                your personal information when you use our website at{' '}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  https://choosesm.art/
                </Box>{' '}
                and our services.
              </Typography>
            </Box>

            <Box component="section">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A1F36',
                  mb: 2,
                }}
              >
                1. Information We Collect
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.75,
                  mb: 2,
                }}
              >
                We collect the following personal information for authentication purposes:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                <li>
                  <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                    <strong>Name:</strong> Your full name as provided through Google OAuth
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                    <strong>Email address:</strong> Your email address associated with your Google
                    account
                  </Typography>
                </li>
              </Box>
              <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                This information is collected through Google OAuth authentication when you sign in
                to our service. We only collect information that is necessary for providing our
                authentication and service functionality.
              </Typography>
            </Box>

            <Box component="section">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A1F36',
                  mb: 2,
                }}
              >
                2. How We Use Your Information
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                We use the collected information solely for the purpose of running our application
                and providing you with our services. Specifically, we use your name and email
                address to:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mt: 1 }}>
                <li>
                  <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                    Authenticate and identify you when you access our service
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                    Provide you with access to our application features
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                    Maintain your account and service preferences
                  </Typography>
                </li>
              </Box>
            </Box>

            <Box component="section">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A1F36',
                  mb: 2,
                }}
              >
                3. Third-Party Services
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.75, mb: 2 }}>
                We use the following third-party services to operate our application:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                <li>
                  <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                    <strong>Google OAuth:</strong> For user authentication. When you sign in with
                    Google, Google&apos;s privacy policy applies to the authentication process. We
                    only receive the information you consent to share (name and email).
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                    <strong>Vercel:</strong> For hosting our application. Vercel acts as our hosting
                    provider and processes data on our behalf in accordance with their privacy
                    policy.
                  </Typography>
                </li>
              </Box>
              <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                We do not share your personally identifying information with any third parties for
                marketing, advertising, or any other purposes, except as required by law or as
                necessary to provide our services through the third-party services mentioned above.
              </Typography>
            </Box>

            <Box component="section">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A1F36',
                  mb: 2,
                }}
              >
                4. Cookies
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                We use HTTP-only cookies for authorization purposes. These cookies are essential for
                maintaining your authenticated session and ensuring the security of your account.
                HTTP-only cookies cannot be accessed by JavaScript, which helps protect against
                cross-site scripting (XSS) attacks. These cookies are used solely for authentication
                and authorization and are not used for tracking or advertising purposes.
              </Typography>
            </Box>

            <Box component="section">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A1F36',
                  mb: 2,
                }}
              >
                5. Data Retention
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                We retain your personal information for a period of 5 years from the date of your
                last interaction with our service, or until you request deletion of your data,
                whichever comes first. After this period, your data will be securely deleted from
                our systems.
              </Typography>
            </Box>

            <Box component="section">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A1F36',
                  mb: 2,
                }}
              >
                6. Your Rights
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.75, mb: 2 }}>
                Under applicable data protection laws, including the EU General Data Protection
                Regulation (GDPR), you have the following rights regarding your personal
                information:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                <li>
                  <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                    <strong>Right to Access:</strong> You can request a copy of the personal
                    information we hold about you.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                    <strong>Right to Deletion:</strong> You can request that we delete your personal
                    information from our systems.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                    <strong>Right to Rectification:</strong> You can request that we correct any
                    inaccurate personal information.
                  </Typography>
                </li>
              </Box>
              <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                To exercise any of these rights, please contact us by email at{' '}
                <Box
                  component="a"
                  href="mailto:v.bondarenko.job@gmail.com"
                  sx={{
                    color: '#4A90E2',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  v.bondarenko.job@gmail.com
                </Box>
                . We will respond to your request within a reasonable timeframe and in accordance
                with applicable data protection laws.
              </Typography>
            </Box>

            <Box component="section">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A1F36',
                  mb: 2,
                }}
              >
                7. Data Security
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                We implement commercially acceptable security measures to protect your personal
                information from unauthorized access, disclosure, alteration, or destruction. This
                includes the use of HTTP-only cookies and secure authentication protocols. However,
                no method of transmission over the Internet or electronic storage is 100% secure,
                and we cannot guarantee absolute security.
              </Typography>
            </Box>

            <Box component="section">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A1F36',
                  mb: 2,
                }}
              >
                8. Data Controller and GDPR Compliance
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                ChooseSmart acts as both a data controller and a data processor with regard to the
                personal data processed through choosesm.art and our services. We comply with
                applicable data protection laws, including the EU General Data Protection Regulation
                (GDPR) where applicable.
              </Typography>
            </Box>

            <Box component="section">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A1F36',
                  mb: 2,
                }}
              >
                9. External Links
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                Our website may contain links to external sites that are not operated by us. Please
                be aware that we have no control over the content and practices of these sites, and
                cannot accept responsibility or liability for their respective privacy policies.
              </Typography>
            </Box>

            <Box component="section">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A1F36',
                  mb: 2,
                }}
              >
                10. Changes to This Privacy Policy
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on this page and updating the effective
                date. Your continued use of our website after any changes will be regarded as
                acceptance of our updated practices around privacy and personal information.
              </Typography>
            </Box>

            <Box component="section">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A1F36',
                  mb: 2,
                }}
              >
                11. Contact Us
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                If you have any questions about this Privacy Policy or how we handle your personal
                information, please contact us at:{' '}
                <Box
                  component="a"
                  href="mailto:v.bondarenko.job@gmail.com"
                  sx={{
                    color: '#4A90E2',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  v.bondarenko.job@gmail.com
                </Box>
              </Typography>
            </Box>

            <Box
              sx={{
                pt: 2,
                borderTop: '1px solid #D0E8FF',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: '0.875rem',
                  color: '#4A4A4A',
                }}
              >
                This policy is effective as of January 1, 2025.
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  </Box>
);

export default PrivacyPolicy;
