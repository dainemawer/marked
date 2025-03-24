import { signOutAction } from "@/app/actions";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { Button } from "./ui/button";

export default async function Header() {

    const supabase = await createClient();
    const {
        data: { user },
      } = await supabase.auth.getUser();

    return (
        <header>
            <div className="flex container max-w-7xl mx-auto items-center justify-between px-4 py-2">
                <h1>Marked</h1>
                <div>
                {!user ? (
                    <>
                        <Button asChild size="sm" variant={"outline"}>
                            <Link href="/sign-in">Sign in</Link>
                        </Button>
                        <Button asChild size="sm" variant={"default"}>
                            <Link href="/sign-up">Sign up</Link>
                        </Button>
                    </>
                ) : (
                    <div className="flex items-center gap-4">
                        Hey, {user.email}!
                        <form action={signOutAction}>
                            <Button type="submit" variant={"outline"}>
                            Sign out
                            </Button>
                        </form>
                    </div>
                )}
                </div>
            </div>
        </header>
    );
}
