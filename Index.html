-- 1. Table des administrateurs
CREATE TABLE public.admin_users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- 2. Fonction de vérification de l'administrateur
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE SQL
SECURITY DEFINER
STABLE
SET search_path = ''
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM public.admin_users
        WHERE id = (SELECT auth.uid())
    );
$$;

-- 3. Table des ressources pédagogiques
CREATE TABLE public.resources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT DEFAULT '',
    level TEXT NOT NULL CHECK (
        level IN ('1AS', '2AS', '3AS')
    ),
    skill TEXT NOT NULL CHECK (
        skill IN (
            'Compréhension de l’écrit',
            'Compréhension de l’oral',
            'Production écrite',
            'Production orale',
            'Points de langue',
            'Autre'
        )
    ),
    resource_type TEXT NOT NULL CHECK (
        resource_type IN (
            'Fiche pédagogique',
            'Support textuel',
            'Activité / exercice',
            'Évaluation',
            'Audio',
            'Vidéo',
            'Autre'
        )
    ),
    file_url TEXT,
    file_name TEXT,
    published BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;

-- 4. Les visiteurs peuvent consulter les ressources publiées
CREATE POLICY "Public can read published resources"
ON public.resources
FOR SELECT
TO anon, authenticated
USING (
    published = TRUE
    OR public.is_admin()
);

-- 5. Seul l'administrateur peut ajouter des ressources
CREATE POLICY "Admin can insert resources"
ON public.resources
FOR INSERT
TO authenticated
WITH CHECK (public.is_admin());

-- 6. Seul l'administrateur peut modifier les ressources
CREATE POLICY "Admin can update resources"
ON public.resources
FOR UPDATE
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- 7. Seul l'administrateur peut supprimer les ressources
CREATE POLICY "Admin can delete resources"
ON public.resources
FOR DELETE
TO authenticated
USING (public.is_admin());

-- 8. Création de l'espace de stockage
INSERT INTO storage.buckets (
    id,
    name,
    public,
    file_size_limit
)
VALUES (
    'abflex-files',
    'abflex-files',
    TRUE,
    52428800
)
ON CONFLICT (id) DO NOTHING;

-- 9. Autoriser l'administrateur à envoyer des fichiers
CREATE POLICY "Admin can upload ABFLEX files"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
    bucket_id = 'abflex-files'
    AND public.is_admin()
);

-- 10. Autoriser l'administrateur à modifier les fichiers
CREATE POLICY "Admin can update ABFLEX files"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
    bucket_id = 'abflex-files'
    AND public.is_admin()
)
WITH CHECK (
    bucket_id = 'abflex-files'
    AND public.is_admin()
);

-- 11. Autoriser l'administrateur à supprimer les fichiers
CREATE POLICY "Admin can delete ABFLEX files"
ON storage.objects
FOR DELETE
TO authenticated
USING (
    bucket_id = 'abflex-files'
    AND public.is_admin()
);
